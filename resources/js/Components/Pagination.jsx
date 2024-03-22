import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        links.length > 0 && (
            <div classname="flex items-center justify-between mt-4">
                {links.map((link, index) => (
                    <Link
                        href={link.url}
                        key={index}
                        className={
                            link.active
                                ? "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
                                : "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        }
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        )
    );
}
