module.exports = function(grunt){
    'use strict';
    
    //Configuração do projeto
    grunt.initConfig({
        //Carrega dados do pacote do NPN na variavel, para que as informações 
        //contida nele possa ser usada.
        pkg: grunt.file.readJSON('package.json'),
        
        //Informa o Plugin que será utilizado
        less: {
            //Declara a tarefa e realiza suas configurações
            exemplo_1: {
                options:{
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                src: 'less/exemplo-1/mini-curso.less',
                dest: 'dist/exemplo-1/css/mini-curso.css'
            },
            exemplo_2: {
                options:{
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                src: 'less/exemplo-2/mini-curso.less',
                dest: 'dist/exemplo-2/css/mini-curso.css'
            },
            exemplo_3: {
                options:{
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                src: 'less/exemplo-3/mini-curso.less',
                dest: 'dist/exemplo-3/css/mini-curso.css'
            },
            exemplo_4: {
                options:{
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                src: 'less/exemplo-4/mini-curso.less',
                dest: 'dist/exemplo-4/css/mini-curso.css'
            }
            
        }
        
    });

    //Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    
    //Registra as tarefas
    grunt.registerTask('exercicio-1', ['less:exemplo_1']);
    grunt.registerTask('exercicio-2', ['less:exemplo_2']);
    grunt.registerTask('exercicio-3', ['less:exemplo_3']);
    grunt.registerTask('exercicio-4', ['less:exemplo_4']);
    

    grunt.registerTask('default', ['exercicio-1','exercicio-2','exercicio-3','exercicio-4']);
}