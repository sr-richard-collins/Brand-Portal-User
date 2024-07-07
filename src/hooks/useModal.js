import useToggle from './useToggle';
import { useState } from 'react';
export default function useModal() {
  const {
    isTrue: isOpen,
    toggle: toggleModal
  } = useToggle();
  const [size, setSize] = useState();
  const [className, setClassName] = useState('');
  const [scroll, setScroll] = useState(false);

  // Opens large modal
  const openModalWithSize = size => {
    setSize(size);
    setClassName('');
    setScroll(false);
    toggleModal();
  };

  // Opens modal with custom class
  const openModalWithClass = className => {
    setClassName(className);
    setScroll(false);
    toggleModal();
  };

  // Opens large modal
  const openModalWithScroll = () => {
    setScroll(true);
    // setSize('sm');
    setClassName('');
    toggleModal();
  };
  return {
    isOpen,
    size,
    className,
    scroll,
    toggleModal,
    openModalWithSize,
    openModalWithClass,
    openModalWithScroll
  };
}