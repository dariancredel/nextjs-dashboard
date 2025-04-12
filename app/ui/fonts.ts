// next/font
// prevents layout shifts
// caches the fonts
// serves it with the HTML
import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: ['400', '700'] 
})