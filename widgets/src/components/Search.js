import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState(' ');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        
        return () => {
            clearTimeout(timerId);
        }

    }, [term]);

    useEffect(()=>{
        var url = "https://en.wikipedia.org/w/api.php"; 
        var params = {
            action: "query",
            list: "search",
            origin:'*',
            format: "json",
            srsearch: debouncedTerm,
        };

        const search = async () => {
            const {data} = await axios.get(url,{params});
            setResults(data.query.search);
        };

        search();

    }, [debouncedTerm]);

    // This may produce a bug of an unexpected request
    // useEffect(()=>{
    //     var url = "https://en.wikipedia.org/w/api.php"; 
    
    //     var params = {
    //         action: "query",
    //         list: "search",
    //         origin:'*',
    //         format: "json",
    //         srsearch: term,
    //     };

    //     const search = async () => {
    //         const {data} = await axios.get(url,{params});
    //         setResults(data.query.search);
    //     };

    //     if (term && !results.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(()=>{
    //             if(term){
    //                 search();
    //             };
    //         },500);
    
    //         return () => {
    //             clearTimeout(timeoutId);
    //         }
    //     }
    // }, [term, results.length]);

    const renderedResults = results.map ((result) => {
        return(
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    {/* _blank is for a new tab, noopener and noreferrer to prevent tab nabbing */}
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`} target='_blank' rel='noopener noreferrer'>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet }} ></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input 
                        className='input'
                        value = {term}
                        onChange={e=>setTerm(e.target.value)} 
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;