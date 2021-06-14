$(document).ready(function(){
    $('#create-test').on('click', function () {
        var Data={coursename:$("#test-name").val(),Articles:$("#test-result").val()}
        if (Data.coursename == null) {
            alert('No test selected!')
        } 
        else {
            //addRow(Data);
            console.log("call came here")
            $.ajax( {
                type:'POST',
                url:`http://${window.location.host}/crud/post`,
                data:Data,
                success:function(datax){
                    console.log(datax);
                    var idx=datax["_id"];
                    console.log(idx);
                    addRow(datax);
                // var x=`<div id="row${idx}">
                //         <div id ="text${datax["_id"]} class="text">
                //         ${task.value}
                //         </div>
                //         <button   id="${datax["_id"]}" onclick=del(this)>delete</button>
                //         </div>`
                // $('#space').append(x);
        
                }
            }
            )
            $('#test-name').val('')
            $('#test-result').val('')
            $('.form-wrapper').addClass('hidden')
             }
        })
    
    $("#getcourse").on('click',function(){
        $.ajax( {
            type:'GET',
            url:`http://${window.location.host}/crud/get`,
            //data:{coursename:$("#test-name").val(),Articles:$("#test-result").val()},
            success:function(datax){
                console.log(datax);
                for(var i=0;i<datax.length;i++)
                {
                    var id=datax[i]._id;
                       id.toString()
        
                    var x=`<div id="row${datax[i]._id}">
                        <div id ="text${datax[i]._id} class="text">
                        ${datax[i].coursename}
                        </div>
                        <button  id="${datax[i]._id}"  onclick=del(this)>delete</button>
                        </div>`
                        $('#space').append(x);
                }
                //var idx=datax["_id"];
                //console.log(idx);
            }
        })
    })
     
    $("#deletecourse").on('click',function(){
        $(".courserow").hide()
        $.ajax( {
            type:'delete',
            url:`http://${window.location.host}/crud/delete`,
            //data:{coursename:$("#test-name").val(),Articles:$("#test-result").val()},
            success:function(datax){
                console.log("deleted");
                
                //var idx=datax["_id"];
                //console.log(idx);
            }
        })
    })

    $('#add-test').on('click', function () {
        $('.form-wrapper').removeClass('hidden')
    })

                // var newId = 4
                // var newTest = { 'name': null, 'id': newId, 'Articles': null }
    // $('#test-result').on('keyup', function () {
    //     newTest.Articles = $(this).val()
    //     //console.log(newTest)

    // })

    // $('#test-name').on('change', function () {
    //     newTest.name = $(this).val()
    //     //console.log(newTest)
    // })

    

    //var tests = []


    function addRow(obj) {
        var row = `<tr scope="row" class="test-row-${obj._id}">
                       <td>${obj.coursename}</td>
                       <td id="result-${obj._id}" data-testid="${obj._id}"">${obj.Articles}</td>
                       <td>
                         <button class="btn btn-sm btn-danger" data-testid=${obj._id} id="delete-${obj._id}">Delete</button>
                         <button class="btn btn-sm btn-info" disabled data-testid="${obj._id}"  id="save-${obj._id}">Save</button>

                         <button class="btn btn-sm btn-danger hidden" data-testid="${obj._id}"  id="cancel-${obj._id}">Cancel</button>
                         <button class="btn btn-sm btn-primary hidden" data-testid="${obj._id}"  id="confirm-${obj._id}">Confirm</button>

                       </td>
                   </tr>`
                   
        $('#tests-table').append(row)
        console.log(obj._id)
        $(`#delete-${obj.id}`).on('click', deleteTest)
        $(`#cancel-${obj.id}`).on('click', cancelDeletion)
        $(`#confirm-${obj.id}`).on('click', confirmDeletion(obj))
        $(`#save-${obj.id}`).on('click', saveUpdate)


        $(`#result-${obj.id}`).on('click', editResult)

    }

    function editResult() {
        var testid = $(this).data('testid')
        var value = $(this).html()

        $(this).unbind()
        $(this).html(`<input class="result form-control" data-testid="${testid}" type="text" value="${value}">`)

        $(`.result`).on('keyup', function () {
            var testid = $(this).data('testid')
            var saveBtn = $(`#save-${testid}`)
            saveBtn.prop('disabled', false)

        })

    }

    function saveUpdate() {
        console.log('Saved!')
        var testid = $(this).data('testid')
        var saveBtn = $(`#save-${testid}`)
        var row = $(`.test-row-${testid}`)

        saveBtn.prop('disabled', true)
        row.css('opacity', "0.5")

        setTimeout(function () {
            row.css('opacity', '1')
        }, 2000)


    }

    function deleteTest() {
        var testid = $(this).data('testid')
         //console.log(testid.toString())
        var deleteBtn = $(`#delete-${testid}`)
        var saveBtn = $(`#save-${testid}`)
        var cancelBtn = $(`#cancel-${testid}`)
        var confirmBtn = $(`#confirm-${testid}`)

        deleteBtn.addClass('hidden')
        saveBtn.addClass('hidden')

        cancelBtn.removeClass('hidden')
        confirmBtn.removeClass('hidden')
    }

    function cancelDeletion() {
        var testid = $(this).data('testid')

        var deleteBtn = $(`#delete-${testid}`)
        var saveBtn = $(`#save-${testid}`)
        var cancelBtn = $(`#cancel-${testid}`)
        var confirmBtn = $(`#confirm-${testid}`)

        deleteBtn.removeClass('hidden')
        saveBtn.removeClass('hidden')

        cancelBtn.addClass('hidden')
        confirmBtn.addClass('hidden')

    }

    function confirmDeletion(obj) {
        var testid = $(this).data('testid')
        var row = $(`.test-row-${testid}`)
        console.log(obj._id)
        $.ajax( {
            type:'delete',
            url:`http://${window.location.host}/crud/deleteone`,
            data:obj,
            success:function(datax){
                console.log("deleted");
                
                //var idx=datax["_id"];
                //console.log(idx);
            }
        })
        row.remove()
         
    }
});