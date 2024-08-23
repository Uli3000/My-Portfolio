import Email from './icons/Email';

function Footer() {
  return (
    <footer className='z-40 bg-transparent'>
      <div className='w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8'>
        <hr className='my-6 border-gray-700 sm:mx-auto lg:mt-1' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-400 sm:text-center'>
            © 2024{' '}
            <a href='#' className='hover:underline'>
              Ulises Castro
            </a>
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            <a
              target='_blank'
              href='https://github.com/Uli3000'
              className='text-gray-500 hover:text-white ms-5'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>GitHub</span>
            </a>
            <a
              target='_blank'
              href='mailto:ulisesdev3000@gmail.com'
              className='text-gray-500 hover:text-white ms-5'
            >
              <Email className='size-5' />
              <span className='sr-only'>Contacto</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
