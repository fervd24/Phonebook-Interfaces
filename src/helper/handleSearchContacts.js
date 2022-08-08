const handleSearchContact = (e, phonebook, setPhonebookList) => {
    const query = e.target.value;
    
    if(!!query) {
      const search = phonebook.filter(contact => {
        return(
          contact.name.toLowerCase().includes(query.toLowerCase())
        )
      });

      setPhonebookList(search);
    } else {
      setPhonebookList(phonebook);
    }
}

export default handleSearchContact