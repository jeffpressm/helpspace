import React, { useContext, useReducer } from 'react';
import { Lottie } from '@crello/react-lottie';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import Markdown from 'components/Markdown';
import { FormContext } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { pivotTable } from 'utils/pivotTable';

import animationDataFull from './Animation/lib/Hero_Elbowbump_12fps.json';
import animationDataGet from './Animation/lib/Hero_Elbowbump_Hover_L_12fps.json';
import animationDataGive from './Animation/lib/Hero_Elbowbump_Hover_R_12fps.json';
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

const initialAnimationState = {
  intro: 'playing',
  get: 'stopped',
  give: 'stopped',
};

function animationReducer(state, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        [action.payload.name]: action.payload.playingState,
      };
    default:
      throw new Error();
  }
}

const Hero = () => {
  const [aState, aDispatch] = useReducer(
    animationReducer,
    initialAnimationState
  );
  const { openForm } = useContext(FormContext);
  const { content } = useContext(SpreadsheetContext);
  const HeroContent = pivotTable(content['Home: Hero']);

  const handleMouseEvent = (name) => {
    aDispatch({
      type: 'update',
      payload: {
        name: name,
        playingState: 'playing',
      },
    });
  };

  // TODO animations occur even in mobile
  const handleAnimationComplete = (name) => {
    return () => {
      aDispatch({
        type: 'update',
        payload: {
          name: name,
          playingState: 'stopped',
        },
      });
    };
  };

  return (
    <>
      <article className={cx('root')}>
        <section className={cx('section', 'get')}>
          <div
            className={cx('link')}
            onClick={() => openForm('get')}
            onMouseEnter={(e) => {
              handleMouseEvent('get');
            }}
          >
            <div className={cx('content-container')}>
              <h2 className={cx('title')}>{HeroContent['Get Headline']}</h2>
              <div className={cx('copy')}>
                <Markdown source={HeroContent['Get Body']} />
              </div>
              <div className={cx('cta')}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </section>
        <section className={cx('section', 'give')}>
          <div
            className={cx('link')}
            onClick={() => openForm('give')}
            onMouseEnter={() => handleMouseEvent('give')}
          >
            <div className={cx('content-container')}>
              <h2 className={cx('title')}>{HeroContent['Give Headline']}</h2>
              <div className={cx('copy')}>
                <Markdown source={HeroContent['Give Body']} />
              </div>
              <div className={cx('cta')}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </section>

        <div
          className={cx('animation-container', {
            'is-intro-complete': aState.intro === 'stopped',
          })}
        >
          <div className={cx('animation', 'animation--full')}>
            <Lottie
              lottieEventListeners={[
                {
                  callback: handleAnimationComplete('intro'),
                  name: 'complete',
                },
              ]}
              autoplay={false}
              playingState={aState.intro}
              config={{ animationData: animationDataFull }}
            />
          </div>
          {aState.intro === 'stopped' && (
            <div className={cx('animation', 'animation--get')}>
              <Lottie
                lottieEventListeners={[
                  {
                    callback: handleAnimationComplete('get'),
                    name: 'complete',
                  },
                ]}
                autoplay={false}
                playingState={aState.get}
                config={{ animationData: animationDataGet }}
              />
            </div>
          )}
          {aState.intro === 'stopped' && (
            <div className={cx('animation', 'animation--give')}>
              <Lottie
                lottieEventListeners={[
                  {
                    callback: handleAnimationComplete('give'),
                    name: 'complete',
                  },
                ]}
                autoplay={false}
                playingState={aState.give}
                config={{ animationData: animationDataGive }}
              />
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default Hero;
