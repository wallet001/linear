---
"@linear/sdk": major
---


feat(schema): [breaking] Type 'AuthCreateOrJoinOrganizationResponse' was removed (AuthCreateOrJoinOrganizationResponse)

feat(schema): [breaking] Field 'ActorBot.id' changed type from 'ID!' to 'ID' (ActorBot.id)

feat(schema): [dangerous] Input field 'quotedText' was added to input object type 'CommentCreateInput' (CommentCreateInput.quotedText)

feat(schema): [dangerous] Input field 'quotedText' was added to input object type 'CommentUpdateInput' (CommentUpdateInput.quotedText)

feat(schema): [dangerous] Input field 'updateMetadata' was added to input object type 'JiraUpdateInput' (JiraUpdateInput.updateMetadata)

feat(schema): [dangerous] Input field 'cycleEnabledStartDate' was added to input object type 'TeamUpdateInput' (TeamUpdateInput.cycleEnabledStartDate)

feat(schema): [non_breaking] Type 'AuthOrganizationInvite' was added (AuthOrganizationInvite)

feat(schema): [non_breaking] Type 'EmailIntakeAddressCreateInput' was added (EmailIntakeAddressCreateInput)

feat(schema): [non_breaking] Type 'EmailIntakeAddressPayload' was added (EmailIntakeAddressPayload)

feat(schema): [non_breaking] Type 'EmailIntakeAddressUpdateInput' was added (EmailIntakeAddressUpdateInput)

feat(schema): [non_breaking] Field 'serviceId' was added to object type 'AuthOrganization' (AuthOrganization.serviceId)

feat(schema): [non_breaking] Field 'authType' was added to object type 'AuthOrganizationDomain' (AuthOrganizationDomain.authType)

feat(schema): [non_breaking] Field 'claimed' was added to object type 'AuthOrganizationDomain' (AuthOrganizationDomain.claimed)

feat(schema): [non_breaking] Field 'name' was added to object type 'AuthOrganizationDomain' (AuthOrganizationDomain.name)

feat(schema): [non_breaking] Field 'organizationId' was added to object type 'AuthOrganizationDomain' (AuthOrganizationDomain.organizationId)

feat(schema): [non_breaking] Field 'verified' was added to object type 'AuthOrganizationDomain' (AuthOrganizationDomain.verified)

feat(schema): [non_breaking] Field 'AuthResolverResponse.availableOrganizations' description changed from 'Organizations this account has access to, but is not yet a member.' to 'List of organizations allowing this user account to join automatically.' (AuthResolverResponse.availableOrganizations)

feat(schema): [non_breaking] Field 'AuthResolverResponse.email' changed type from 'String' to 'String!' (AuthResolverResponse.email)

feat(schema): [non_breaking] Field 'AuthResolverResponse.lockedOrganizations' description changed from 'List of organizations this user account is part of but are currently locked because of the current auth service.' to 'List of organization available to this user account but locked due to the current auth method.' (AuthResolverResponse.lockedOrganizations)

feat(schema): [non_breaking] Field 'AuthResolverResponse.token' description changed from 'JWT token for authentication of the account.' to 'Application token.' (AuthResolverResponse.token)

feat(schema): [non_breaking] Field 'AuthResolverResponse.token' is deprecated (AuthResolverResponse.token)

feat(schema): [non_breaking] Field 'AuthResolverResponse.token' has deprecation reason 'Deprecated and not used anymore. Never populated.' (AuthResolverResponse.token)

feat(schema): [non_breaking] Field 'AuthResolverResponse.users' description changed from 'Users belonging to this account.' to 'List of active users that belong to the user account.' (AuthResolverResponse.users)

feat(schema): [non_breaking] Field 'userAccountId' was added to object type 'AuthUser' (AuthUser.userAccountId)

feat(schema): [non_breaking] Field 'quotedText' was added to object type 'Comment' (Comment.quotedText)

feat(schema): [non_breaking] Input field 'GoogleUserAccountAuthInput.inviteLink' description changed from 'An optional invite link for an organization.' to 'An optional invite link for an organization used to populate available organizations.' (GoogleUserAccountAuthInput.inviteLink)

feat(schema): [non_breaking] Field 'emailIntakeAddressCreate' was added to object type 'Mutation' (Mutation.emailIntakeAddressCreate)

feat(schema): [non_breaking] Field 'emailIntakeAddressDelete' was added to object type 'Mutation' (Mutation.emailIntakeAddressDelete)

feat(schema): [non_breaking] Field 'emailIntakeAddressRotate' was added to object type 'Mutation' (Mutation.emailIntakeAddressRotate)

feat(schema): [non_breaking] Field 'emailIntakeAddressUpdate' was added to object type 'Mutation' (Mutation.emailIntakeAddressUpdate)

feat(schema): [non_breaking] Description for argument 'id' on field 'Query.emoji' changed from 'The identifier of the emoji to retrieve.' to 'The identifier or the name of the emoji to retrieve.' (Query.emoji.id)

feat(schema): [non_breaking] Input field 'TeamUpdateInput.cycleEnabledStartWeek' description changed from 'Whether the first cycle should start in the current or the next week.' to '[DEPRECATED] Whether the first cycle should start in the current or the next week.' (TeamUpdateInput.cycleEnabledStartWeek)

feat(schema): [non_breaking] Field 'authTokenLinkDisabled' was added to object type 'UserAccount' (UserAccount.authTokenLinkDisabled)