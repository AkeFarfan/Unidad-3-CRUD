var app = new function(){
    this.elemento = document.getElementById('Tareas');
    this.Tareas=[];
    
    
    this.FertchAll = function(){
        var Dato ='';
        if(this.Tareas.length >0){
            for(i=0; i<this.Tareas.length; i++){
                Dato += '<tr>';
                Dato += '<td>' + (i+1) + ' . ' + this.Tareas[i] +'</td>';
                Dato += '<td><button onClick="app.Edit(' + i + ')" class="btn btn-warning">Edit</button></td>';
                Dato += '<td><button onClick="app.Delete(' + i + ')" class="btn btn-danger">Delete</button></td>';
                Dato += '</tr>';
            }
        }

        this.Contador(this.Tareas.length);
        return this.elemento.innerHTML = Dato;
    };

    this.Agregar = function(){
        elemento = document.getElementById('Agregar-Todo');
        var tarea = elemento.value;
        if(tarea){
            this.Tareas.push(tarea.trim());
            elemento.value='';
            this.FertchAll();

        }
    };

    this.Edit = function(item){
        var elemento = document.getElementById('Editar-Todo');
        elemento.value = this.Tareas[item];
        document.getElementById('Editor-Caja').style.display ='block';
        self= this;

        document.getElementById('Guardar-Editar').onsubmit = function(){
             var tarea = elemento.value;
             if(tarea){
                 self.Tareas.splice(item, 1, tarea.trim());
                 self.FertchAll();
                 CloseInput();
             }
        }
    };

    this.Delete = function(item){
        this.Tareas.splice(item, 1)
        this.FertchAll();
    };

    this.Contador =function(Dato){
        var elemento = document.getElementById('Contador');
        var nombre = 'Tareas';
        if(Dato){
            if(Dato ==1){
                nombre = 'Tareas';
            }
            elemento.innerHTML = Dato + ' ' +nombre;
        }else{
            elemento.innerHTML = "No" + nombre;
        }
    };
}

app.FertchAll();
function CloseInput(){
    document.getElementById('Editor-Caja').style.display = 'none';
}