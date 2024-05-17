import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {}

function ScrollToTop({ }: Props) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return null;
}

export default ScrollToTop;