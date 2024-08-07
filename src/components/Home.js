import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=36');
                setPokemons(response.data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemons();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="home">
            <h1>Pokémon List</h1>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;