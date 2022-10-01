(() => {
  /** para decirle a TS que uno de los argumentos es opcional simplemente se le adiciona un simbolo de interrogacion '?', antes de declarar el tipo de data*/

  const fullName = (firstName: string, lastName?: string): string => {
    // return firstName + "  " + lastName;

    /**otra forma de indicarle a TS que el arg es opcional y que regrese una respuesta
     * podria declararse de la siguiente forma
     */

    return `${ firstName} ${ lastName ||  'Que se yo!'}`/**de esta fora, TS no arrojaria ningun error */
  };

  console.log(fullName("tony"));
})();
