import styled from 'styled-components';
import detailsIllustration from '../../../assets/illustrations/details.svg';

export const Wrapper = styled.div`
  text-align: center!important;
`;

export const DownloadWrapper = styled.div`
    margin-left: auto!important;
    margin-right: auto!important;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    h2 {
        font-size: 70px;
        font-family: Catamaran,Helvetica,Arial,"sans-serif";
        font-weight: 200;
        letter-spacing: 1px;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 20px;
      margin-top: 0;
      margin-bottom: 1rem;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
  }
`;
export const Badge = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
  `;