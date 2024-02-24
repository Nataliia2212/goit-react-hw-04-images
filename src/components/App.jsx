import React, { useState, useEffect } from 'react';
import { serchImages } from 'servises/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default function App() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [totalImages, setTotalImages] = useState(0);
    const [images, setImages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const getData = async () => {
            if (query) {
                try {
                    setIsLoading(true);
                    setError(null);
                    const images = await serchImages({ page, q: query });
                    setData(prev => [...prev, ...images.hits]);
                    setTotalImages(images.totalHits);
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        getData();
    }, [page, query]);

    const handleSubmit = query => {
        setQuery(query);
        setData([]);
        setPage(1);
        setTotalImages(0);
    };

    const handleClick = () => {
        setPage(prev => prev + 1);
    };

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handlClickOnImages = images => {
        setIsOpen(true);
        setImages(images);
    };

    return (
        <div>
            <Searchbar onSubmit={handleSubmit} />
            {error && <h2>Something went wrong!! Try again</h2>}
            <ImageGallery galleryList={data} openModal={handlClickOnImages} />
            {isLoading && <Loader />}
            {data && data.length < totalImages && (
                <Button onClick={handleClick} />
            )}
            {isOpen && <Modal images={images} closeModal={handleToggleModal} />}
        </div>
    );
}
