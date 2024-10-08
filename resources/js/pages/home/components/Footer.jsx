export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul>
                        <li className="mb-2">
                            <a href="https://github.com/orgs/mosaico-matrix" className="text-gray-400 hover:text-white">
                                Github
                            </a>
                        </li>
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
                        <li className="mb-2">Website: <a href="https://murkrowdev.org"
                                                         className="text-gray-400 hover:text-white">murkrowdev.org</a>
                        </li>
                        <li className="mb-2">Github: <a href="https://github.com/Murkrow02"
                                                        className="text-gray-400 hover:text-white">Murkrow02</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Donate</h4>
                    <ul>
                    <li className="mb-2">
                        <a href="https://ko-fi.com/murkrowdev" className="text-gray-400 hover:text-white" target="_blank">
                            Buy me a coffee
                        </a>
                    </li>
                        <li className="mb-2">
                            <a href="https://www.paypal.me/murkrow02" className="text-gray-400 hover:text-white" target="_blank">
                                PayPal
                            </a>
                        </li>
                        <li>
                            <a href="https://www.digitalocean.com/?refcode=61a7f239b857&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img
                                src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%202.svg"
                                alt="DigitalOcean Referral Badge"/></a>
                            <p className={"mt-2"}>Get $200 in credit</p>
                        </li>
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
