/**
 * suma los 2 numeros que obtiene por parametro
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
export const sum = (n1, n2) => n1 + n2;

/**
 * resta los 2 numeros que obtiene por parametro
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
export const diff = (n1, n2) => n1 - n2;

/**
 * multiplica los 2 numeros que obtiene por parametro
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
export const prod = (n1, n2) => n1 * n2;

/**
 * divide los 2 numeros que obtiene por parametro
 * @param {number} n1
 * @param {number} n2
 * @returns {number|string}
 */
export const div = (n1, n2) => (n2 === 0 ? "Err" : n1 / n2);

export default {
  sum,
  diff,
  prod,
  div,
};
