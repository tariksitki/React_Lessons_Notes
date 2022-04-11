
// state, loading ve error icin normal de 3 tane state olusturmamiz gerekir.
// ancak bunlari burada tek bir custom hook ile yapacagiz

import { useEffect, useState } from "react";

// burada import from react yaziyor. ama bizim react diye bir klasörümüz yok. bu node modules den gelir. eger basinda hicbirsey yoksa sadece react ise bu durumda built in demektir. ama "./useFetch" in basi bos degildir. bu nedenle bizim olusturdugumuz demektir.

// url i kullanacagimiz yerden göndererek dynamic yapiyoruz
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((res) => {
                if (!res.ok) {
                    setError("Something went Wrong")
                    setLoading(false)
                    setData([])
                } else {
                    return res.json()
                }
            
        } )
        .then((data) => (
            setData(data),
            setLoading(false),
            setError("")
        ))
    }, [url])

    return {data, loading, error}
}

export default useFetch;

// Önemli: useFetch i kullanabilmek icin hem sonunda return ediyoruz.
// hem de export etmemiz gerekir.

// kendi custom hook umuzu yazma sebebimiz. fetch islemlerini bircok yerde kullaniyoruz. bu nedenle bu kodlari her yerde yazmamak icin

// burada useFetch bir hook yani bir func dir

// burada kendi yazdigimiz hook u diger projelerimizde kullanalim
// post istegini de yapalim