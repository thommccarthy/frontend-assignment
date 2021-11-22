import React, { useRef, useEffect } from 'react';
import modalStyles from './Modal.module.css';
import moment from 'moment';
import closeIcon from '../images/close-icon.svg';

const Modal = ({ modalMovie, setModalMovie }) => {
  const modalRef = useRef();

  // close when clicking outside of modal
  useEffect(() => {
    function handler(event) {
      if (modalMovie && !modalRef.current?.contains(event.target)) {
        setModalMovie(undefined);
      }
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  });

  return (
    <>
      {modalMovie && (
        <div className={modalStyles.modalBackground}>
          <div className={modalStyles.modalWrapper} id='modal' ref={modalRef}>
            <div className={modalStyles.titleAndClose}>
              <h1>{modalMovie.original_title}</h1>
              <div
                className={modalStyles.closeIcon}
                onClick={() => setModalMovie(undefined)}
              >
                <img alt='close icon' src={closeIcon} />
              </div>
            </div>
            <div className={modalStyles.imageAndDetailsGrid}>
              {modalMovie.poster_path ? (
                <img
                  alt={`${modalMovie.title} promotional poster`}
                  className={modalStyles.modalImage}
                  src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${modalMovie.poster_path}`}
                />
              ) : (
                <p>No image found</p>
              )}

              <div className={modalStyles.details}>
                <p>
                  <strong>Release Date:</strong>{' '}
                  {moment(modalMovie.release_date).format('MMMM DD, YYYY')}
                </p>

                <p>{modalMovie.overview}</p>

                <p>
                  <strong>{modalMovie.vote_average}</strong> / 10 (
                  {modalMovie.vote_count} total votes )
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
