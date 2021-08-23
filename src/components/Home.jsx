import React from 'react';
import CenteredHero from './common/CenteredHero';
import Featurettes from './common/Featurettes';
import Header from './common/Header';
import HeroDivider from './common/HeroDivider';

import { featurettes } from '../utils/featurettes';

const Home = () => {
  return (
    <main className='mt-5'>
      <Header />
      <HeroDivider />
      <CenteredHero />
      <Featurettes items={featurettes} />
    </main>
  );
};

export default Home;
