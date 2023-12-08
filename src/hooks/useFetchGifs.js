import { useEffect, useState } from "react"
import { getGifs } from "../components/helpers/getGifs"


export const useFetchGifs = (category) => {

    const [images, setimages] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        setimages(newImages);
        setIsloading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return{
        images:images,
        isLoading: isLoading
    }
}
