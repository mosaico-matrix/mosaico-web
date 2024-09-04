export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul>
                        <li className="mb-2">
                            <a href="/manager" className="text-gray-400 hover:text-white">
                                Widget Manager
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/docs" className="text-gray-400 hover:text-white">
                                Documentation
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/privacy" className="text-gray-400 hover:text-white">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact me :)</h4>
                    <ul>
                        <li className="mb-2">Email: marcocoppola02.mc [at] gmail.com</li>
                        <li className="mb-2">Website: <a href="https://murkrowdev.org" className="text-gray-400 hover:text-white">murkrowdev.org</a></li>
                        <li className="mb-2">Github: <a href="https://github.com/Murkrow02" className="text-gray-400 hover:text-white">Murkrow02</a></li>
                    </ul>
                </div>
            </div>

            <div style={{height: '40px'}}></div>

            <div className="mt-8 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Mosaico
            </div>

            <div style={{height: '40px'}}></div>

        </footer>
    );
};
