import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Code Clubs: Where Learning Meets Fun',
    Svg: require('@site/static/img/WhereLearningMeetsFun.svg').default,
    description: (
      <>
        Discover how micro:bit transforms library spaces into exciting coding 
        playgrounds. Learn how these tiny computers can engage participants 
        of all ages and skill levels. See how libraries are creating inclusive, hands-on learning 
        environments that spark curiosity and build digital skills.
      </>
    ),
  },
  {
    title: 'From Beginner to Brilliant: Your Project Journey',
    Svg: require('@site/static/img/BeginnerToExpertCoder.svg').default,
    description: (
      <>
        Explore a curated project library that takes participants from their 
        first Hello World to complex interactive stories. Our guide showcases 
        progression paths, from 15-minute quick starts to multi-session challenges, 
        ensuring every participant finds their perfect coding adventure. 
        Learn how to support beginners while keeping advanced learners challenged 
        and motivated.
      </>
    ),
  },
  {
    title: 'Building a Tech-Savvy Community',
    Svg: require('@site/static/img/TechSavvyCommunity.svg').default,
    description: (
      <>
        Transform your library into a hub of technological empowerment. Our 
        guide reveals strategies for community building, including family 
        coding events, inter-library competitions, and opportunities for peer 
        mentoring. Discover how micro:bit code clubs can create connections, 
        build confidence, and introduce critical 21st-century skills to diverse 
        community members.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
