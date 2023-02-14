const Clients = () => {
    return (
        <section className="mt-max-640px-clients bg-gray-100 p-8 flex flex-col items-center justify-center gap-8">
            <p className="text-2xl font-medium text-gray-800 text-center">Trusted by greatest company</p>
            <article className="flex flex-col md:flex-row items-center gap-20 text-center">
                <img src="google.png" alt="logo de google"  className="w-40"/>
                <img src="airbnb.png" alt="logo de  airbnb"  className="w-40"/>
                <img src="amazon.png" alt="logo de amazon"  className="w-40"/>
                <img src="shopify.png"alt="logo de shopify"  className="w-40"/>
                <img src="" alt=""  className="w-40"/>
            </article>
        </section>
    )
}
export default Clients;