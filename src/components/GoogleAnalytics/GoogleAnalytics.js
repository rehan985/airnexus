import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga';

export default function GoogleAnalytics() {

    const location = useLocation();
    
    useEffect(() => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname + location.search);
    }, [location])

    return(
        <Outlet/>
    )
}
