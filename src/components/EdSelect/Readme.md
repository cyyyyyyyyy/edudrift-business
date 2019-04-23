Basic select:

```jsx
import EdInput from '../EdInput';
<EdSelect
    variant='outlined'
    defulatValue={10}
    input={<EdInput name='age' width={80}/>}>
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
</EdSelect>
```