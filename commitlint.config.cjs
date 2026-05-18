module.exports = {
    extends: [], // extends: ["@commitlint/config-conventionnal"]
    rules: {
        /* 
            0 | 1 | 2 ==> Désactivé | avertissement | erreur
            always | never ==> toujours appliqué | jamais appliqué
            20 ==> valeur de la règle
        */
        'header-min-length': [2, 'always', 5], 
        'header-case-start-capital': [2, 'always']
    }, 
    plugins: [
        {
            /* Implémentation règle custom */
            rules: {
                'header-case-start-capital': ({raw}) => {
                    return [
                        /^[A-Z]/.test(raw),
                        'Commit message must start with a capital letter'
                    ]
                }
            }
        }
    ]
}