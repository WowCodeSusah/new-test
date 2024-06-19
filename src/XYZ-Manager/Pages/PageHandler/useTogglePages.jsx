import { useState } from 'react';

const useTogglePages = (initialState) => {
    const [pages, setPages] = useState(initialState);

    const togglePage = (sectionIndex, pageIndex) => {
        setPages(pages.map((section, sIdx) =>
            sIdx === sectionIndex
                ? section.map((_, pIdx) => pIdx === pageIndex)
                : section.map(() => false)
        ));
    };

    return [pages, togglePage];
};

export default useTogglePages;