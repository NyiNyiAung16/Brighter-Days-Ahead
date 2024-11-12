export default function Photo({ url }) {
    return ( 
        <img src={url} alt="photo" className="w-full h-[500px] object-cover rounded" />
    )
}