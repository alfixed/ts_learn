import React, {Component} from 'react';
// import cn from 'arui-feather/cn'; import performance from
// 'arui-feather/performance';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import Plate from 'arui-feather/plate';
import Textarea from 'arui-feather/textarea';

import './customer.css';

// @cn('customer') @performance()
class Customer extends Component {
    state = {
        customer: '',
        site: '',
        message: ''
    };

    onSubmitMessage = () => {
        this.setState({message: 'Привет! Как дела?'})
        alert('Данные по клиенту сохранены!');
    };

    render() {
        let {customer, site, message} = this.state;

        return (
            <Plate className='customer'>
                <Form onSubmit={this.onSubmitMessage}>
                    <FormField>
                        <Input className='input' label='Клиент' placeholder='Введите клиента'/>
                        <Input className='input' label='Сайт' placeholder='Введите сайт'/>
                    </FormField>
                    <FormField>
                        <Textarea label='Сообщение для клиента' disabled={true} value={message}/>
                    </FormField>
                    <FormField>
                        <Button view='extra' type='submit'>Отправить</Button>
                    </FormField>
                </Form>
            </Plate>
        );
    }
}

export default Customer;