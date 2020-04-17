import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import Footer from 'components/Footer';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import TwoUp from 'components/TwoUp';
import styles from './Faq.module.scss';

const cx = classNames.bind(styles);

const Faq = () => {
  const { content } = useContext(SpreadsheetContext);
  const { FAQ: FaqContent, 'FAQ Hero': HeroContent } = content;

  return (
    <>
      <article className={cx('root')}>
        <TwoUp
          slot1={
            <div>
              <h1 className={cx('hero-headline')}>{HeroContent[0]['CTA']}</h1>
              <div className={cx('hero-body')}>{HeroContent[0]['Body']}</div>
            </div>
          }
          slot2={<div></div>}
        />
        <div className={cx('faq-container')}>
          <ul>
            {FaqContent.map((item) => {
              const {
                Question: question,
                Answer: answer,
                Description: description,
              } = item;
              return (
                <div key={question} className={cx('faq-item')}>
                  <TwoUp
                    slot1={<h3 className={cx('faq-headline')}>{question}</h3>}
                    slot2={
                      <>
                        <div>
                          <strong className={cx('faq-answer')}>{answer}</strong>
                        </div>
                        <div className={cx('faq-description')}>
                          {description}
                        </div>
                      </>
                    }
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </article>
      <footer className={cx('footer')}>
        <Footer />
      </footer>
    </>
  );
};

export default Faq;
