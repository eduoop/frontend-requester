import React from 'react'
import { SearchContainer, SearchInput } from './styles'
import { GrSearch } from "react-icons/gr"
import Loader from '../../assets/loader.gif'

type Props = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ search, setSearch }: Props) => {
    return (
        <SearchContainer>
            <GrSearch fontSize={20} color='#1F1F1F' className='cursor-pointer' />
            <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Pesquisar' />
        </SearchContainer>
    )
}
