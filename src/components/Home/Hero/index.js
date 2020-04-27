import React, { useContext, useState, useReducer } from 'react';
import { Lottie } from '@crello/react-lottie';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { FormContext, openForm } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

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
  const { getRef, giveRef } = useContext(FormContext);
  const { content } = useContext(SpreadsheetContext);
  const { Hero: HeroContent } = content;

  const handleMouseEvent = (name) => {
    aDispatch({
      type: 'update',
      payload: {
        name: name,
        playingState: 'playing',
      },
    });
  };

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
            onClick={() => openForm(getRef)}
            onMouseEnter={(e) => {
              handleMouseEvent('get');
            }}
          >
            <div className={cx('content-container')}>
              <h2 className={cx('title')}>{HeroContent[0]['CTA']}</h2>
              <div className={cx('copy')}>{HeroContent[0]['Body']}</div>
              <div className={cx('cta')}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </section>
        <section className={cx('section', 'give')}>
          <div
            className={cx('link')}
            onClick={() => openForm(giveRef)}
            onMouseEnter={() => handleMouseEvent('give')}
          >
            <div className={cx('content-container')}>
              <h2 className={cx('title')}>{HeroContent[1]['CTA']}</h2>
              <div className={cx('copy')}>{HeroContent[1]['Body']}</div>
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
