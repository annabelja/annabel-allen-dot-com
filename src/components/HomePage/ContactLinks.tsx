import { MenuList, MenuListItem, Separator, Toolbar } from "react95"

export const ContactLinks = () => {
    return (
        <Toolbar>
            <MenuList>
                <MenuListItem primary>Quick Links</MenuListItem>
                <Separator />
                {/*@ts-expect-error -- known issue with MenuListItem 'as' prop */}
                <MenuListItem style={{cursor: 'pointer'}} as='a' href="mailto:annabelja17@gmail.com" target="_blank" rel="noopener noreferrer">Email</MenuListItem>
                {/*@ts-expect-error -- known issue with MenuListItem 'as' prop */}
                <MenuListItem style={{cursor: 'pointer'}} as='a' href="https://www.linkedin.com/in/annabeljallen" target="_blank" rel="noopener noreferrer">LinkedIn</MenuListItem>
                {/*@ts-expect-error -- known issue with MenuListItem 'as' prop */}
                <MenuListItem style={{cursor: 'pointer'}} as='a' href="https://github.com/annabelja" target="_blank" rel="noopener noreferrer">GitHub</MenuListItem>
            </MenuList>
        </Toolbar>
    )
}