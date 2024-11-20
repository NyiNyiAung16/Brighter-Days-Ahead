export default function Photo({ url }) {
    return ( 
        <img src={url} alt="photo" className="w-full max-h-[500px] h-auto object-cover rounded sm:h-[360px] md:h-[500px]" />
    )
}