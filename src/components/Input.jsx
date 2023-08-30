import '../App.css';

const InputList=(p)=>{
    return(
        <div>
            <div className="input__container">
            <input value={p.text} maxLength="20" onChange={e=>p.onChange(e.target.value)} placeholder="Type..."/>
            <button onClick={p.onAddHandeler}>Add</button>
        </div>
        </div>
    );
}

export default InputList;