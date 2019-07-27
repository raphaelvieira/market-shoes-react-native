import numeral from 'numeral';

export const formatPrice = num => `USD  ${numeral(num).format('0,0.00')}`;

/*
export const { format: formatPrice }  = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}); */
