import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { WatchList } from "./ViewWatchLists"

interface MediaItem {
    tmdbId: number;
    mediaType: string;
}

export default function ViewWatchListMediaItemsComponent() {
    const { id } = useParams();
    const [watchList, setWatchList] = useState<WatchList>();
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([])

    useEffect(() => {
        async function fetchWatchListById() {
            try {
                const response = await fetch(`http://localhost:8080/api/get-watchlists/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors' 
                });
                const result = await response.json();
                setWatchList(result);
            } catch (error) {
                console.error("Error retrieving Watch List: ", error);
            }
        }

        async function fetchMediaItemsById() {
            try {
                const response = await fetch(`http://localhost:8080/api/media-item/get-items-in-watchlist/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors'
                });
                const result = await response.json();
                setMediaItems(result);
            } catch (error) {
                console.error("Error retrieving Media Items: ", error);
            }
        }

        fetchWatchListById();
        fetchMediaItemsById();

    }, [id]);


    return (
        <>
            <div>
                {watchList && (
                    <>
                        <h1>{watchList.name}</h1>
                        <h2>{watchList.description}</h2>
                    </>
                )}
            </div>
                    // BOILERPLATE -- Replace with actual media details
            <div>
                {mediaItems && (
                    <>
                        {mediaItems.map((mediaItem) => (
                            <div>
                                <p key={mediaItem.tmdbId}>{mediaItem.tmdbId}</p>
                                <p key={mediaItem.mediaType}>{mediaItem.mediaType}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>

        </>
    )
}