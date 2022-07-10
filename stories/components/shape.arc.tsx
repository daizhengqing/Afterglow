import init from '@/utils/init';

export default () => {
  window.onload = () => {
    const container = document.querySelector('#container');

    const { canvas, ctx } = init({
      el: container,
      width: 800,
      height: 500,
      backgroundColor: 'rgba(0, 0, 0, 1)',
    });

    console.log(canvas, ctx);
  };

  return <div id="container"></div>;
};
