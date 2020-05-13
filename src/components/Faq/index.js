import React from 'react';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';
import Footer from 'components/Footer';
import Markdown from 'components/Markdown';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { pivotTable } from 'utils/pivotTable';

import TwoUp from 'components/TwoUp';
import heroImg from './assets/hero.png';
import styles from './Faq.module.scss';

const cx = classNames.bind(styles);

const Faq = () => {
  const [content] = useSpreadsheet(CMS_URL['FAQ: Hero']);
  const FaqHeroContent = pivotTable(content);
  const [FaqItemsContent = []] = useSpreadsheet(CMS_URL['FAQ: Items']);

  return (
    <>
      <article>
        <ContentBox childClassName={cx('faq-content-box-child')} isTop>
          <TwoUp
            className={cx('faq-upper-section')}
            slot1={
              <div>
                <h1 className={cx('hero-headline')}>
                  {FaqHeroContent['Headline']}
                </h1>
                <div className={cx('hero-body')}>
                  <Markdown source={FaqHeroContent['Body']} />
                </div>
              </div>
            }
            slot2={
              <div className={cx('hero-img')}>
                <img src={heroImg} alt="" />
              </div>
            }
          />
        </ContentBox>
        <ContentBox childClassName={cx('faq-content-box-child')}>
          <div className={cx('faq-container')}>
            <div className={cx('faq-header')}>
              <h3>FAQs</h3>
            </div>
            <div className={cx('faq-body')}>
              <ul>
                {FaqItemsContent.map((item) => {
                  const {
                    Question: question,
                    Answer: answer,
                    Description: description,
                  } = item;
                  return (
                    <div key={question} className={cx('faq-item')}>
                      <TwoUp
                        className={cx('faq-under-section')}
                        slot1={
                          <h3 className={cx('faq-headline')}>{question}</h3>
                        }
                        slot2={
                          <>
                            <div>
                              <strong className={cx('faq-answer')}>
                                {answer}
                              </strong>
                            </div>
                            <div className={cx('faq-description')}>
                              <Markdown source={description} />
                            </div>
                          </>
                        }
                      />
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </ContentBox>
      </article>
      <footer className={cx('footer')}>
        <Footer />
      </footer>
    </>
  );
};

export default Faq;
