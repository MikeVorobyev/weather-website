import axios from "axios";
import { z } from 'zod'

const locationSchema = z.object({
    id: z.number(),
    name: z.string(),
    admin1: z.string().optional(),
    admin2: z.string().optional(),
    admin3: z.string().optional(),
    admin4: z.string().optional(),
    latitude: z.number(),
    longitude: z.number()
}).transform(({ name, admin1, admin2, admin3, admin4, ...others }) =>{
    const regionFull = [admin1, admin2, admin3, admin4]
            .filter(Boolean)
            .join(', ')
    return {
        ...others,
        city: name,
        region: admin1,
        regionFull
    }
})

export type Location = z.infer<typeof locationSchema>

const RU_TO_LAT: Record<string, string> = {
    'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i',
    'й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t',
    'у':'u','ф':'f','х':'h','ц':'ts','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'',
    'э':'e','ю':'yu','я':'ya'
}

const transliterate = (text: string) => 
    text
      .toLowerCase()
      .split('')
      .map(ch => RU_TO_LAT[ch] ?? ch)
      .join('')

export async function searchLocation(query: string): Promise<Location[]> {
    const cleanQuery = query.trim()
    if (cleanQuery.length < 2) return []

    const enQuery = transliterate(cleanQuery)
    
    const queries = Array.from(new Set([cleanQuery, enQuery]))
    
    try {
        const requests = queries.map(name => 
            axios.get('https://geocoding-api.open-meteo.com/v1/search', {
                params: { name, language: 'ru' }
            })
        )


        const responses = await Promise.all(requests)

        const combinedResults = responses.flatMap(res => res.data.results || [])
        const uniqueResults = Array.from(
            new Map(combinedResults.map((item) => [item.id, item])).values()
        )

        const parsed = z.array(locationSchema).safeParse(uniqueResults)
        return parsed.success ? parsed.data : []
    } catch(err) {
        console.log('ERROR geocoding: ', err)
        return []
    }
}