
import { AddCategory } from './components/AddCategory';
import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    // const categories = [' Teminator 1', 'Teminator 1', 'Teminator 1'];
    const [categories, setCategories] = useState([' Animados ']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterX'] );
    // }

    return (
		<>
			<h2>GifApp</h2>
			<AddCategory
				setCategories={setCategories}
			></AddCategory>
			<hr />

			<ol>
				{categories.map((category) => (
					<GifGrid 
						key={ category }
						category={ category }>
					</GifGrid>
				))}
			</ol>
		</>
    );
}
