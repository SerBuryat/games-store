import Fuse from "fuse.js";
import { useState } from "react";

const options = {
    keys: ["frontmatter.title", "frontmatter.category"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
};

function Search({ games }) {
    const [query, setQuery] = useState("");

    const fuse = new Fuse(games, options);

    const foundGames = fuse
        .search(query)
        .map(result => result.item)
        .slice(0, 3);

    function handleOnSearch({ target = {} }) {
        const { value } = target;
        setQuery(value);
    }

    return (
        <>
            <div className="flex flex-col gap-5 py-5 px-5 mx-2 my-2 w-full border rounded">
                <label htmlFor="search"> Search </label>
                <input
                    class="text-black py-2 px-2 rounded"
                    type="text"
                    id="search"
                    value={query}
                    onChange={handleOnSearch}
                    placeholder="Search for anything..."
                    autocomplete="off"
                />
                <div>
                    <span
                        onClick={() => setQuery("")}
                        class="cursor-pointer inline-flex items-center rounded-md bg-gray-50 px-2 py-1 
                                font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 hover:bg-stone-300">
                        Clear
                    </span>
                </div>
            </div>
            <div className="w-full">
                {query.length > 1 && (
                    <div>
                        Found <span class="font-bold text-2xl text-amber-500"> {foundGames.length} </span> 
                        {foundGames.length === 1 ? " result " : " results "} 
                        for <span class="font-bold text-2xl text-amber-500">'{query}'</span>
                    </div>
                )}
                <ul>
                    {foundGames &&
                        foundGames.map((game) => (
                            <li className="flex flex-col py-2 gap-3 border rounded my-2 px-2 py-2">
                                <a href={game.url}
                                    class="cursor-pointer text-lg text-black bg-amber-500 hover:bg-white
                                            rounded-lg py-2 px-2 w-fit font-medium">
                                    {game.frontmatter.title}
                                </a>
                                <p>{game.frontmatter.description}</p>
                                <div className="flex py-2 gap-2">
                                    {game.frontmatter.category.split(" ").map(c => (
                                        <span
                                            class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 
                                                    font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}

export default Search;