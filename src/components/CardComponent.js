import React from "react";


export default function CardComponent({ movies }) {
    
    return (
        <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 my-10">
                {movies.map((items, key) => (
                    <><div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                    <img
                        className="object-cover w-full h-48"
                        src={items.image}
                        alt={items.title}
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold text-blue-600">
                            {items.title}
                            </h4>
                            <span>{items.year }</span>
                        <h2 className="text-xl font bold text-blue-700">{ items.rating}</h2> 
                        <p className="mb-2 leading-normal">
                        {items.description}
                            </p>
                        <a href={items.trailer} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" >
                            Watch Trailer
                        </button></a>
                    </div>
                </div>
                    </>
                ))}
            </div>
        </>
    );
}