import { Label, Input, Container, Icon } from './Filter.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    const filteredName = evt.target.value.toLocaleLowerCase();

    dispatch(setFilterValue(filteredName));
  };

  return (
    <Container>
      <Label>
        Find contact
        <IconContext.Provider value={{}}>
          <Icon>
            <AiOutlineSearch />
          </Icon>
        </IconContext.Provider>
        <Input onChange={onChange} type="text" name="filter" />
      </Label>
    </Container>
  );
};
