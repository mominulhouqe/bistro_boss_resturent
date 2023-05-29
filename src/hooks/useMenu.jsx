import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://bristo-boss-server-mominulhouqe.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setMenu(data)
            })
    }, []);
return [menu, loading]

}

export default useMenu;