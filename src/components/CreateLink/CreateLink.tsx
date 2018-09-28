import * as React from 'react';
import {FormEvent} from "react";

class CreateLink extends React.Component<Props, State> {
    state = {
        description: '',
        url: ''
    };

    submitHandler = (e: FormEvent) => {
        e.preventDefault();
        this.props.postLink({
            variables: {
                description: this.state.description,
                url: this.state.url
            }
        });
        this.setState({ description: '', url: '' });
    };

    render() {
        const { description, url } = this.state;
        return (
            <div>
                <form className="flex flex-column mt3" onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        className="mb2"
                        value={description}
                        placeholder="A description for the link..."
                        onChange={e => this.setState({ description: e.target.value })}
                    />
                    <input
                        type="text"
                        className="mb2"
                        value={url}
                        placeholder="The URL for the link..."
                        onChange={e => this.setState({ url: e.target.value })}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export interface Props {
    postLink: (...args: any[]) => void;
}

export interface State {
    description: string;
    url: string;
}

export default CreateLink;