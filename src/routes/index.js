// Pages
import Home from '~/pages/Home';
import Tintuc from '~/pages/Tintuc';
import Lienhe from '~/pages/Lienhe';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/tin-tuc', component: Tintuc },
    { path: '/lien-he', component: Lienhe },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
