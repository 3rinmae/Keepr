


namespace Keepr.Services;

public class VaultKeepsService
{
  private readonly VaultKeepsRepository _repository;
  private readonly KeepsRepository _keepsRepository;

  public VaultKeepsService(VaultKeepsRepository repository, KeepsRepository keepsRepository)
  {
    _repository = repository;
    _keepsRepository = keepsRepository;
  }

  internal VaultKeep CreateVaultKeep(VaultKeep vaultKeepData)
  {
    VaultKeep vaultKeep = _repository.CreateVaultKeep(vaultKeepData);
    // Keep keep = _keepsRepository.GetKeepById(vaultKeep.KeepId);
    // keep.Kept++;
    // _keepsRepository.UpdateKeep(keep);
    return vaultKeep;
  }

  internal VaultKeep GetVaultKeepById(int vaultKeepId)
  {
    VaultKeep vaultKeep = _repository.GetVaultKeepById(vaultKeepId);
    if (vaultKeep == null)
    {
      throw new Exception($"Invalid id: {vaultKeepId}");
    }
    return vaultKeep;
  }

  internal string DestroyVaultKeep(int vaultKeepId, string userId)
  {
    VaultKeep vaultKeep = GetVaultKeepById(vaultKeepId);
    if(vaultKeep.CreatorId != userId)
    {
      throw new Exception("This is not yours to delete");
    }
    _repository.DestroyVaultKeep(vaultKeepId);
    return "You have deleted this keep from your vault";
  }


  // internal List<VaultVaultKeep> GetVaultVaultKeepsByAccountId(string userId)
  // {
  //   List<VaultVaultKeep> vaultVaultKeeps = _repository.GetVaultVaultKeepsByAccountId(userId);
  //   return vaultVaultKeeps;
  // }
}