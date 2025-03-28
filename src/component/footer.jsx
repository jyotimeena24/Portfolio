import React from 'react';

function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white p-6 mt-auto">
                <div className="container mx-auto text-center">
                    <p className="text-lg font-semibold">© 2025 Jyoti Kumari Meena</p>
                    <p className="text-sm mt-2">
                        Built with ❤️ using React. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                            Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            Twitter
                        </a>
                        <a href="https://linkedin.com/jyotikumarimeena" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;