import { useEffect, useState } from "react"

const useSaller = email => {
const [isSaller, setIsSaller] = useState(false);
// const [isSallerLoading, setIsSallerLoading] = useState(true);

useEffect( () => {
    if(email) {
        fetch(`https://used-mobile-server-two.vercel.app/users/saller/${email}`)
        .then( res => res.json())
        .then( data => {
            console.log(data.isSaller);
            setIsSaller(data.isSaller);
            // setIsSallerLoading(false);
        })
    }
} , [email])

return [isSaller, ]
}

export default useSaller;