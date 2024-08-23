export default function MenuItem() {
    return(
        <div className="bg-gray-200 px-4 py-12 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/pizza-product.png" className="max-h-32 max-w-auto block mx-auto" alt="pizza" />
            </div>
            <h4 className="font-semibold text-xl my-3">Pesto Pizza</h4>
            <p className="text-gray-500 text-sm">
                Lorem Ipsum dolor sit amet, consecreerertwergsdf dfgsr gwergwerg
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                Add to cart $12
            </button>
        </div>
    );
}